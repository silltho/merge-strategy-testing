#!/usr/bin/env node

require('dotenv').config({
    path: '.env.local',
  })
const shell = require('shelljs')

shell.exec('changeset version')
