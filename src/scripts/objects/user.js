const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    following: '',
    followed: '',
    repositories: [ ],
    events: [ ],
    
    async setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.following = gitHubUser.following
        this.followers = gitHubUser.followers
    },

    async setRepositories(repositories) {
        this.repositories = repositories
    },

    async setEvents (events) {
        // const createPushEvents = events.filter(event => event.type === "PushEvent" || event.type === "CreateEvent")
        // const selectedEvents = createPushEvents.filter(event => event.payload.commits !== undefined)
        const selectedEvents = events.filter(event => 
            event.payload.commits !== undefined && 
            (event.type === "PushEvent" || event.type === "CreateEvent")
        );
        
        this.events = selectedEvents
    }
}

export { user }