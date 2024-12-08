<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        Hi! I'm <strong>Jace Glover</strong>, a recent NCSU graduate, and aspiring game developer!<br/>
        I have a genuine passion for both <strong>gaming</strong> and <strong>coding</strong> and hope to showcase this passion professionally.
      </div>

      <div style="margin-top: 20px;">During my time in college, I worked on numerous <router-link to="/other-projects">projects</router-link>, but I also recently participated in a game jam which can you see here: <router-link to="/game-projects">game projects</router-link>.<br/>
      My <router-link to="/resume">resume</router-link> dives deeper into the experience and skills I've gained so far.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> in the games industry. However, I am also very open to work in any programming related fields.<br/>
      You can reach me at <a href="mailto:mrglover0326@gmail.com">mrglover0326@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Jace" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>