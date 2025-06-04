import colors from 'colors';
import server from './server';

const port = Number(process.env.PORT) || 3002;

server.listen(port, () => {
    console.log(colors.cyan.bold(`REST API en el puerto: ${port}`));
    console.log(colors.cyan.bold(`http://localhost:${port}`));
});