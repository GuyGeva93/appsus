export default {
    template: `
    <header class="app-header">
        <div class="app-header-logo">
           <h2>APPSUS</h2>
        </div>
        <nav class="main-nav">
            <router-link to="/" active-class="active-link" exact><img src="img/home.png" ></router-link> <hr>
            <router-link to="/keep" ><img src="img/google-keep.png" ></router-link> <hr>
            <router-link to="/mail" ><img src="img/mail.png" ></router-link>
            <!-- <router-link to="/survey" >Survey</router-link> | -->
            <!-- <router-link to="/about" >About</router-link>  -->
        </nav>
    </header>
    `,

}