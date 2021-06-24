export default {
    template: `
    <header class="app-header">
        <div class="logo">
           <h2>APPSUS</h2>
        </div>
        <ul class="tg-list">
        <li class="tg-list-item">
        <input @click="toggleDark"  class="tgl tgl-light" id="cb1" type="checkbox" />
        <label class="tgl-btn" for="cb1"></label>
        </li>
        </ul>   
        <nav class="main-nav">
            <router-link to="/" active-class="active-link" exact><img src="../img/home.png" ></router-link> <hr>
            <router-link to="/keep" ><img src="../img/google-keep.png" ></router-link> <hr>
            <router-link to="/mail" ><img src="../img/mail.png" ></router-link>
            <!-- <router-link to="/survey" >Survey</router-link> | -->
            <!-- <router-link to="/about" >About</router-link>  -->
        </nav>
    </header>
    `,
    methods: {
        toggleDark() {

        }
    },
}