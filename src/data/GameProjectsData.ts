import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Witch Hunt", "img/projects/witch-hunt-icon.gif", 
    `
    <div class="paragraph">
     <strong>Witch Hunt</strong> is the game I entered for ScreamJam 2024. It's available to play on Itch.io.
     <br/>Participants were given <strong>7 days</strong> to create and upload a game.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/UU735emnuJk" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="notice">
        Playable in the browser (WebGL) on <a href="https://jaceg0326.itch.io/witch-hunt" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/JaceG0326/ScreamJam2024" target="_blank">GitHub</a>.
    </div>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Basic Platformer Movement</li>
        <li>Enemy AI</li>
        <li>Spell Projectile</li>
        </ul>
    </div>
    </div>
    `, "#9591ff")
];