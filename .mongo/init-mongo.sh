#!/bin/bash
set -e

mongo <<EOF
use workkit
db.createUser({
  user: 'workkit',
  pwd: 'workkitpwd',
  roles: [{
    role: 'readWrite',
    db: 'workkit'
  }]
})
db.employee.insert({ name: 'employee', surname: 'test' });
EOF