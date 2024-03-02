const screen = {
    userProfile: document.querySelector(".profile-data"),

    renderUser(user) {
        this.userProfile.innerHTML =   `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                            <div class="data">
                                                <h1>${user.name ?? "Não possui nome cadastrado 😢"}</h1>
                                                <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>
                                                <div class="follow-info">
                                                    <div class="following">
                                                        <h4>Seguindo</h4>
                                                        <p>${user.following}</p>
                                                    </div>

                                                    <div class="followers">
                                                        <h4>Seguidores</h4>
                                                        <p>${user.followers}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`

        let repositoriesItems = ''
        user.repositories.forEach(repo => repositoriesItems += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>

                                                                    <ul class="repo-info">
                                                                        <li>🍴 ${repo.forks_count}</li>
                                                                        <li>⭐ ${repo.stargazers_count}</li>
                                                                        <li>👀 ${repo.watchers_count}</li>
                                                                        <li>👨‍💻 ${repo.language ?? '<p title="Linguagem não especificada" class="no-language">?</p>'}</li>
                                                                    </ul> 
                                                                </li>`)

        if(user.repositories.length > 0) {
            this.userProfile.innerHTML +=  `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItems}</ul>      
                                            </div>` 
        }

        let eventItems = ''
        user.events.forEach(event => eventItems += `<li><p>${event.repo.name}<span class="message">-${event.payload.commits[0].message}</span></p></li>`)

        if(user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventItems}</ul>      
                                            </div>` 
        }
    },


    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }