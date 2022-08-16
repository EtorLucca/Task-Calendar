import User from "../models/User";
import Task from "../models/Task";

class TasksController {
  async index(req, res) {
    try {
      const { user_id } = req.params;
      const { q } = req.query;
      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json();
      }

      let query = {};

      if (q) {
        query = { url: { $regex: q } };
      }

      //--------- Filtrando resultados de task por usuário e pesquisa
      const tasks = await Task.find({
        //---- Caso for pra mostrar todas as tarefas para todos os usuários comentar linha abaixo (userId: user_id)
        userId: user_id,
        ...query,
      });

      return res.json(tasks);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async create(req, res) {
    try {
      const { user_id } = req.params;
      const { title, description, hour, when, duration } = req.body;

      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json();
      }

      const newTask = await Task.create({
        title,
        description,
        hour,
        when,
        duration,
        userId: user_id,
      });

      return res.status(201).json(newTask);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findById(id);

      if (!task) {
        return res.status(404).json();
      }

      return res.json(task);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { 
        title,
        description,
        hour,
        when,
        duration
      } = req.body;

      const task = await Task.findById(id);

      if (!task) {
        return res.status(404).json();
      }

      await task.updateOne({ 
        title,
        description,
        hour,
        when,
        duration,
        userId: user_id,
      });

      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async destroy(req, res) {
    try {
      const { user_id, id } = req.params;
      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json();
      }

      const task = await Task.findOne({
        userId: user_id,
        _id: id,
      });

      if (!task) {
        return res.status(404).json();
      }

      await task.deleteOne();

      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}

export default new TasksController();
