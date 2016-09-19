const rc = require('rc')

module.exports = rc('cordlr', {
  plugins: [],
  prefix: '$',
  adminPerms: [
    'KICK_MEMBERS',
    'BAN_MEMBERS',
    'ADMINISTRATOR',
    'MANAGE_CHANNELS',
    'MANAGE_GUILD',
    'MANAGE_MESSAGES',
    'MUTE_MEMBERS',
    'DEAFEN_MEMBERS',
    'MOVE_MEMBERS',
    'MANAGE_NICKNAMES',
    'MANAGE_ROLES_OR_PERMISSIONS'
  ]
})
