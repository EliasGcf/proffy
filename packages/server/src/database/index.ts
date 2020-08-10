import { createConnection, ConnectionOptions } from 'typeorm';

import dataBaseConnectionFile from '../../ormconfig';

createConnection(dataBaseConnectionFile as ConnectionOptions);
