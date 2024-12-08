<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I am excited and hopeful for the opportunity to continue growing in the ever-evolving world of computer science.
      <br />
      <br />After graduating from kindergarten, I've been enrolled in the army for 25 years, where I learned to destroy things in an amazing number of ways.
      <br />
      <br />My passion is game development but my love for programming extends to software development, among other things. As long as there is a problem that needs solving, I'll be invested.
      <br />
      <br />I'm looking for any opportunities that will give me professional experience so if you have any opportunity feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides computer science, I'm passionate about gaming, anime, music, and movies.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Jace" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work Experience</h2>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2018-2019</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Programming Languages</h3>
        <div class="skill">C</div>
        <div class="skill">C#</div>
        <div class="skill">C++</div>
        <div class="skill">Java</div>
        <div class="skill">Python</div>
        <div class="skill">HTML</div>
        <div class="skill">Javascript</div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>

      <div class="skill-set">
        <h3>Experience</h3>
        <SkillRate name="Java" :rate="4" />
        <SkillRate name="C#" :rate="4" />
        <SkillRate name="C++" :rate="3" />
        <SkillRate name="Python" :rate="3" />
        <SkillRate name="C" :rate="2" />
        <SkillRate name="HTML" :rate="2" />
        <SkillRate name="JavaScript" :rate="2" />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div class="skill-set">
        <h3>Game Engines</h3>
        <div class="skill">Unity</div>
        <div class="skill">Godot</div>
        <div class="skill">GameMaker</div>
        <div class="skill">Unreal Engine</div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>

      <div class="skill-set">
        <h3>Experience</h3>
        <SkillRate name="Godot" :rate="4" />
        <SkillRate name="Unity" :rate="4" />
        <SkillRate name="GameMaker" :rate="3" />
        <SkillRate name="Unreal Engine" :rate="3" />
      </div>

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>North Carolina State University > Aug 2021-Dec 2024</h3>
      <h4>Bachelor's Degree in Computer Science</h4>
      <div>Game Development Concentration</div>

      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Gaming</h3>
        <div>I've been playing video games basically my whole life. Some of my favorites are: Minecraft, the Borderlands series, and the Pokémon series.</div>

        <h3>I 🧡 Anime</h3>
        <div>The first anime I ever watched was Dragon Ball Z. The most recent anime I've watched is Hunter X Hunter.</div>

        <h3>I 💛 Music</h3>
        <div>I listen to music all of the time. It helps me think. I'm listening to music as I type this...</div>

        <h3>I 💚 Movies</h3>
        <div>My personal favorite is The Wachowski Sister's <strong>Speed Racer</strong> released in 2008.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.skill {
  float: left;
  border: 1px solid hsla(0,0%,86.3%,.44);
  padding: 2px 10px;
  margin: 5px;
  display: block;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
    display: block;
  }
}
</style>