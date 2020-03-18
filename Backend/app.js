var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var templateRouter = require('./routes/template');
var commentsRouter = require('./routes/comments')
var projectsRouter = require('./routes/projects')
var measurementsRouter = require('./routes/measurements')
var defaultRouter = require('./routes/defaultTemplates')


var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/templates', templateRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/measurements', measurementsRouter);
app.use('/api/default/templates', defaultRouter)



module.exports = app;
