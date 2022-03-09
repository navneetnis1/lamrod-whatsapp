const express = require('express')
const qrcode = require('qrcode-terminal');
const bodyParser = require('body-parser');
const { Client,MessageMedia,LocalAuth } = require('whatsapp-web.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//comment start//
// const client = new Client({
//   authStrategy: new LocalAuth({
//     clientId: "example",
//     dataPath: ".wwebjs_auth"
// }),
//   puppeteer: {
//     headless: false,
//     args: [
//       '--no-sandbox',
//       '--disable-setuid-sandbox',
//       '--unhandled-rejections=strict'
//   ]},
// });

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: "example",
    dataPath: ".wwebjs_auth"
}),
puppeteer: { 
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--unhandled-rejections=strict'
    ]},
});

client.on('qr', qr => {
  console.log(qr);
  qrcode.generate(qr, {small: true});
});

client.on('authenticated', (object) => {
  console.log('AUTHENTICATED');
  
});

client.on('auth_failure', msg => {
  // Fired if session restore was unsuccessful
  console.error('AUTHENTICATION FAILURE', msg);
});



client.on('ready', () => {
    console.log('Client is ready!');
    const number = "919610417000";
    console.log('sending....');

    // Your message.
    const text = "hello new";

    // Getting chatId from the number.
    // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
    const chatId = number + "@c.us";

    // Sending message.
    client.sendMessage(chatId, text);
});


client.initialize();

//comment end








function sendMessage(number, message) {
    // const session = process.env.LWA_SESSION_STRING;
    // if (!session) return console.log('session unavailable');

    // const jsonobject = JSON.parse(session);
    // console.log(jsonobject);

    //Session code starts

    //9649150004 online object
    const jsonobject = {
      WABrowserId: '"cV0/2QitEDabVdrCe6C3aQ=="',
      WASecretBundle: '{"key":"6Ts0Ej/H+zr4/AT5dp7Xs6Ly2YUjV2Q/cWEBAPFzQCg=","encKey":"XF5hVudfpxb5j8hhxv5YG5xGD8FaZFg3Pk6EDDNIdQQ=","macKey":"6Ts0Ej/H+zr4/AT5dp7Xs6Ly2YUjV2Q/cWEBAPFzQCg="}',
      WAToken1: '"nR4/j6NDw1fsRMMzdyfWzJsOqx2n91YbaMocOMU7n0M="',
      WAToken2: '"1@lg5fJy1B5kKZtHooA8pjYNjc3YNDKD22+FhGrwH9uGRP/W64Rr+I9Ydub37Mrlr7MIQ3aWNyHqRFqA=="'
      };


// session code ends
    const client = new Client({
      session: jsonobject,
      puppeteer: {
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--unhandled-rejections=strict'
      ]},
    });

    client.on('ready', () => {
      console.log('Im Ready now');
        const chatId = '91'+ number + "@c.us";
        console.log(chatId, message);
        client.sendMessage(chatId, message);
        setTimeout(() => client.destroy(), 10000);
        console.log('sent');

    });

    client.initialize();
}







const sendMessages = async (messages) => {
  console.log('I can send These messages = ', messages);


  //session code starts

  //9649150004 online object
  const jsonobject = {
    WABrowserId: '"cV0/2QitEDabVdrCe6C3aQ=="',
    WASecretBundle: '{"key":"6Ts0Ej/H+zr4/AT5dp7Xs6Ly2YUjV2Q/cWEBAPFzQCg=","encKey":"XF5hVudfpxb5j8hhxv5YG5xGD8FaZFg3Pk6EDDNIdQQ=","macKey":"6Ts0Ej/H+zr4/AT5dp7Xs6Ly2YUjV2Q/cWEBAPFzQCg="}',
    WAToken1: '"nR4/j6NDw1fsRMMzdyfWzJsOqx2n91YbaMocOMU7n0M="',
    WAToken2: '"1@lg5fJy1B5kKZtHooA8pjYNjc3YNDKD22+FhGrwH9uGRP/W64Rr+I9Ydub37Mrlr7MIQ3aWNyHqRFqA=="'
    };
  // session code ends


  // // // offline session
  // const jsonobject = {
  //   WABrowserId: '"fzJzrXWwscZ5YMukE90zlg=="',
  //   WASecretBundle: '{"key":"nsQAd3lvio+zieEJlbpU600WnzsUzdN9cU7ATaZYcX8=","encKey":"jDWcSJXippKCUJtPEYHcpEpEtpHiVxcRBmO7UkYqvcA=","macKey":"nsQAd3lvio+zieEJlbpU600WnzsUzdN9cU7ATaZYcX8="}',
  //   WAToken1: '"YGjdb2JFuxXQEqG2ZLkwjUpTr6AsOd5664F+Le3GUABbhXLhcI9eOQN9fJIU8D7cx5zGFV0Q8RSTu9MMxmC+pQ=="',
  //   WAToken2: '"1@vQr/W/lXtAhL5m2OX34/vHgBNv8oMEiQSuEUf5zbZ3jq8/dsCaVSdpG+aFfARDkFceHvSfyrFwAK5Q=="'
  // };
  // // // offline session
  
var sessionObject = {
  WABrowserId: '"UjUK8c4ROqEDPoBnJb8hqw=="',
  WASecretBundle: '{"key":"96hS/gbazjdf+UreE0RbpbhAw4Z5wkBEMskIj87X87Y=","encKey":"mnQG8ADUMZ6kO/itWFFqm0EITUvLDiBpAM3Ssk31E28=","macKey":"96hS/gbazjdf+UreE0RbpbhAw4Z5wkBEMskIj87X87Y="}',
  WAToken1: '"paH/NJ/8VKcpOizxNZsSjmAoTR6jQ9Uqqrcye8fW6Nk="',
  WAToken2: '"1@9L7K778ZMZ39go1RNgs/aFMOykIsUzTf8GdYS07GtDNEyp5bKhxHgr11IGKOCO+yFRPHAiB2E3O/Rg=="'
};
  const client = new Client({
    authStrategy: new LegacySessionAuth({
      
        session: sessionObject,
        // puppeteer: {
        //   headless: true,
        //   args: [
        //     '--no-sandbox',
        //     '--disable-setuid-sandbox',
        //     '--unhandled-rejections=strict'
        // ]}, // saved session object
    })
});

  client.initialize().catch(_ => _);

  client.on('disconnected', () => console.log('I am disconnected'))
  client.on('ready', async () => {

    console.log('im ready Now');

    async function asyncSubProcessing(item) {  
      await new Promise(async resolve => {
        if (item.isMedia) {
          const media = await MessageMedia.fromUrl(item.fileurl);
          media.filename = item.filename;
          item.message = media;
        }
        const chatId = '91'+ item.number + "@c.us";
        console.log(chatId, item.message);
        await client.sendMessage(chatId, item.message);
        setTimeout(() => resolve(), 40000);
      });
      return item;
    }

    const promises = [];
    for (const message of messages) promises.push(await asyncSubProcessing(message));
    await Promise.all(promises);
    
    //setTimeout(() => client.destroy(), 1000);
    client.destroy();

    return console.log('sent');
  });
}


// ///i can do anything


// const messages = [
//   {number: '919887981988', message: 'hello 1'},
//   {number: '919610417000', message: 'hello 1'}
// ];

//sendMessages(messages);


app.use('/sendMessage', async (req, res, next) => {
  console.log('i will send message');
  const number = req.query.number;
  const message = req.query.message;
 
  sendMessage(number, message);
  return res.json({ sent: true });
});

app.use('/sendMessages', async (req, res, next) => {
  console.log('i will send message');
  const messages = req.body;
  sendMessages(messages);
  return res.json({ sent: true });
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('whatsapp webapp listening on port !'+port);
});

module.exports = app;