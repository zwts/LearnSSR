import express from 'express';
import childProcess from 'child_process';

const app = express();

app.get('*', (req, res) => {
  res.send(`
    <html>
      <body>
        <div>Hello ts</div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('ssr server listen on 3000');
});

childProcess.exec('start http://172.0.0.1:3000');
