require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    var nome = 'Ana Gaspar'
    var cargo = 'Desenvolvedora de Software.'
    res.render('inicio', {
        nome: nome,
        cargo: cargo
    })
})

app.get('/sobre', (req, res) => {
    var titulo = 'Sobre mim'
    res.render('sobre', {
        titulo: titulo
    })
})

app.get('/habilidades', (req, res) => {
    var titulo = 'Habilidades & Projetos'
    var descricao = 'Abaixo estão algumas tecnologias com as quais estou familiarizada:'
    const projetos = [
        {
          id: 1,
          titulo: "Desempenho de Vereadores",
          imagem: "spoiler-projetos/spoiler-api1.png",
          descricao:
            "Desenvolvimento de uma página web responsiva com visualizações gráficas para representar a atuação geral da câmara.",
          tecnologias: ["HTML5", "CSS3", "JavaScript", "Flask", "MySQL"],
          github: "https://github.com/Draco-Imperium/API_FATEC1",
          deploy: ""
        },
        {
          id: 2,
          titulo: "Dashboard de Indicadores",
          imagem: "spoiler-projetos/spoiler-api2.png",
          descricao:
            "Desenvolvimento de um dashboard de indicadores para monitorar e visualizar o impacto da plataforma, fornecendo dados estratégicos para patrocinadores e stakeholders.",
          tecnologias: ["HTML5", "CSS3", "JavaScript", "React", "Sass", "TypeScript", "NodeJS"],
          github: "https://github.com/GeneSys-fatec/API-2DSM",
          deploy: ""
        },
        {
          id: 3,
          titulo: "Portfólio V2",
          imagem: "spoiler-projetos/spoiler-portfolio.png",
          descricao: "Desenvolvimento de um portfólio pessoal que reúne projetos e experiências.",
          tecnologias: ["HTML5", "CSS3", "React", "TypeScript", "TailwindCSS"],
          github: "https://github.com/anajgaspar/personal-portfolio",
          deploy: "https://anagaspar.vercel.app"
        }
    ];      

    res.render('habilidades', {
        titulo: titulo,
        descricao: descricao,
        projetos: projetos
    })
})

// CRUD de E-mail

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/contato', (req, res) => {
    var titulo = 'Contato'
    var descricao = 'Abaixo estão os meus links de contato. Sinta-se a vontade para me enviar uma mensagem!'
    res.render('contato', {
        enviado: false,
        titulo: titulo,
        descricao: descricao
    })
})

app.post('/enviar-email', (req, res) => {
    const nome = req.body.nome
    const email = req.body.email
    const mensagem = req.body.msg

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.email_user,
            pass: process.env.email_pass
        }
    })

    const mailOptions = {
        from: email,
        to: 'anagaspar0527@gmail.com',
        subject: 'Mensagem do portfólio',
        text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.render('contato', {
                enviado: false,
                titulo: 'Contato',
                descricao: 'Abaixo estão os meus links de contato. Sinta-se à vontade para me enviar uma mensagem!',
                erro: true
            });
        } else {
            console.log('E-mail enviado: ' + info.response);
            res.render('contato', {
                enviado: true,
                titulo: 'Contato',
                descricao: 'Abaixo estão os meus links de contato. Sinta-se à vontade para me enviar uma mensagem!',
                erro: false
            })
        }
    })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});