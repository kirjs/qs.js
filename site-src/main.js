var data = require('./getData').read();

require('./generator/launchers')(data);
require('./generator/main')(data);
