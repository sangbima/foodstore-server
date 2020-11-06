const Tag = require('./model')

async function store(req, res, next) {
  try {
    let payload = req.body
    let tag = new Tag(payload)
    await tag.save()

    return res.json(tag)
  } catch (err) {
    if (err && err.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors
      })
    }

    next(err)
  }
}

async function index(req, res, next) {
  try {
    let tag = await Tag.find()

    return res.json(tag)
  } catch (err) {
    if (err && err.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors
      })
    }

    next(err)
  }
}

async function view(req, res, next) {
  try {
    let tag = await Tag.findOne({_id: req.params.id})

    return res.json(tag)
  } catch (err) {
    if (err && err.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors
      })
    }

    next(err)
  }
}

async function update(req, res, next) {
  try {
    let payload = req.body
    let tag = await Tag.findByIdAndUpdate({_id: req.params.id}, payload, {new: true, runValidator: true})

    return res.json(tag)
  } catch (err) {
    if (err && err.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors
      })
    }

    next(err)
  }
}

async function destroy(req, res, next) {
  try {
    let tag = await Tag.findOneAndDelete({_id: req.params.id})

    return res.json(tag)
  } catch (err) {
    if (err && err.name === 'ValidationError') {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors
      })
    }

    next(err)
  }
}

module.exports = {
  store,
  index,
  view,
  update,
  destroy
}