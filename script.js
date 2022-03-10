const loginEmail = document.querySelector("#emailLog")
let valueLoginEmail = "";
loginEmail.addEventListener('change', (e) => {
  e.preventDefault();
  valueLoginEmail = e.target.value
})

const loginSenha = document.querySelector("#senhaLog")
let valueLoginSenha = "";
loginSenha.addEventListener('change', (e) => {
  e.preventDefault();
  valueLoginSenha = e.target.value
})

const senhaCadastro = document.querySelector("#senhaCad")
let valueCadastroEmail = "";
senhaCadastro.addEventListener('change', (e) => {
  e.preventDefault();
  valueCadastroSenha = e.target.value
})

const emailCadastro = document.querySelector("#emailCad")
let valueCadastroSenha = "";
emailCadastro.addEventListener('change', (e) => {
  e.preventDefault();
  valueCadastroEmail = e.target.value
})

const nomeCadastro = document.querySelector("#nomeCad")
let valueCadastroNome = "";
nomeCadastro.addEventListener('change', (e) => {
  e.preventDefault();
  valueCadastroNome = e.target.value
})

const formLogin = document.querySelector("#login")
formLogin.addEventListener('submit', async (e) => {
  await login(e);
})

const formCadastro = document.querySelector("#cadastro")
formCadastro.addEventListener('submit', async (e) => {
  await cadastro(e)
})

const linkCad = document.querySelector(".linkCad")
linkCad.addEventListener('click', (e) => {
    e.preventDefault();
    formCadastro.style.display = 'flex'
    formLogin.style.display = 'none'
  })
  
  const linkLog = document.querySelector(".linkLog")
  linkLog.addEventListener('click', (e) => {
    e.preventDefault();
    formCadastro.style.display = 'none'
    formLogin.style.display = 'flex'
  })

  

  const login = async (e) => {
    e.preventDefault();
    const bodyReq = { email: valueLoginEmail, senha: valueLoginSenha };
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyReq)
      })
      const data = await response.json();
      if (response.status !== 200) {
        console.error(data)
        return
      }
      localStorage.setItem('token', data.token)
      alert('login success')
    } catch (error) {
      alert(error)
    }
  }
  
  const cadastro = async (e) => {
    e.preventDefault();
    const bodyReq = { email: valueCadastroEmail, senha: valueCadastroSenha, nome: valueCadastroNome };
    try {
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyReq)
      })
      const data = await response.json();
      if (response.status !== 201) {
        console.error(data)
        return
      }
      alert('usuário criado com sucesso')
      formLogin.style.display = 'flex'
      formCadastro.style.display = 'none'
    } catch (error) {
      alert(error)
    }
  }