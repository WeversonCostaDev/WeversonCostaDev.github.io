import{t as e}from"./ifce-x8xmLpEC.js";document.querySelector(`#app`).innerHTML=`
    <header>
        <div id= "faixa-superior">
          <nav>
            <a class= "link-unico estilo-texto" href= "https://portal.ifce.edu.br/campus/aracati/">Instituto Federal de Educação, Ciência e Tecnologia do Ceará</a>
          </nav>
            <nav class="menu">
              <a href="#ouvidoria"><i class="fa-solid fa-headset"></i>Ouvidoria</a>
              <a href="#transparencia"><i class="fa-solid fa-circle-info"></i>Transparência</a>
              <a href="#Acessibilidade"><i class="fa-solid fa-face-smile"></i>Acessibilidade</a>
              <a href="#pesquisar"><i class="fa-solid fa-magnifying-glass"></i>Pesquisar</a>

              <a href="#facebook"><i class="fa-brands fa-square-facebook icon"></i></a>
              <a href="#instagram"><i class="fa-brands fa-square-instagram icon"></i></i></a>
              <a href="#email"><i class="fa-solid fa-envelope icon"></i></i></a>
            </nav>
        </div>
        <div id="faixa-meio">
          <img id="logo" src="${e}">
        </div>
        <div id="faixa-inferior">
          <nav class= "menu">
            <a href="index.html">Página inicial</a>
            <a href="about.html">Sobre o site</a>
            <a href="contact.html">Página de contato</a>
          </nav>
        </div>
    </header>

    <main id="contact-background">
        <section class="centraliza-conteudo">
          <div id= "contact-pagina" class="corpo card">
                <form action="#" method="post">

                    <h2>Agende seu passeio pelo vale do Jaguaribe</h2>

                    <label for="nome">Nome:</label>
                    <input type= "text" id= "nome" name="nome" placeholder="digite seu nome" required>

                    <br><br>

                    <label for="sexo"> Sexo:</label>
                    <input type= "radio" id=" sexo" name="sexo" value="feminino">feminino
                    <input type= "radio" id=" sexo" name="sexo" value="feminino">masculino
                    <br><br>

                    <label for="email">E-mail:</label>
                    <input type="email" id=email name="email" placeholder="digite seu e-mail" required></input>
                    
                    <br><br>

                    <label for="telefone">Telefone:<label>
                    <input type="tel" id="telefone" name="telefone" required></input>

                    <br><br>

                    <label for=cidade>Cidade:</label>
                    <select id=cidade name=cidade>
                    <option>Aracati</option>
                    <option>Fortim</option>
                    <option>Jaguaruana</option>
                    <option>Itaiçaba</option>
                    </select>

                    <br><br>

                    <label for="data">Data desejada para o passeio:</label>
                    <input type="date" id="data" name="data">
                    
                    <br><br>

                    <label for= "pessoas">Número de pessoas:</label>
                    <input type="range" id="pessoas" name="pessoas" min="1" max="20" value="1">

                    <p>Quais tipos de passeio você prefere?</p>
                    <input type="checkbox" id="praias" name="interesses" value="Praias"></input>
                    <label for= "praias">Praias</label>
                    
                    <br>

                    <input type="checkbox" id="ecoturismo" name="interesses" value="Ecoturismo">
                    <label for="ecoturismo">Ecoturismo</label>

                    <br>

                    <input type="checkbox" id="historia" name="interesses" value="Turismo Histórico">
                    <label for="historia">Turismo Histórico</label>

                    <br>

                    <input type="checkbox" id="gastronomia" name="interesses" value="Gastronomia">
                    <label for="gastronomia">Gastronomia</label>
                    <br><br>

                    <button accesskey= "e" aria-label="submeter" type="submit">Enviar</button>
                </form>
          </div>
        </section>
    </main>

    <footer id="rodape">
        <p class="estilo-texto">© 2026 - Desenvolvido por Weverson Costa</p>
        <p class="estilo-texto">Ciência da Computação - IFCE Campus Aracati</p>
        
        <nav>
          <a href="#email">Contato</a>
          <a href="#instagram">Instagram</a>
          <a href="#github">GitHub</a>
        </nav>
      </footer>

  `;