<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="DirectivesModifiersDataRendering">
    <h1>DirectivesModifiersDataRendering</h1>
    <div class="v-model">
      <h1>V-Model</h1>
      <p>Type here:</p>
      <textarea
        v-model="writeMessage"
        class="message"
        rows="5"
        maxlength="72"
      />
      <br />
      <p class="show-message">{{ writeMessage }}</p>
      <br />
      <input v-model="checkedNames" type="checkbox" id="john" value="John" />
      <label for="john"> John</label>

      <br />
      <span>Is checked: {{ checkedNames }}</span>
    </div>
    <div class="v-if-v-show">
      <h1>V-IF and V-SHOW</h1>
      <br />
      <h3>Show button if i write something here!!!</h3>
      <p>it depends on the text area activation</p>
      <textarea v-model="showButton"></textarea>
      <br />
      <button v-show="showButton" type="submit">Written</button>
      <p v-if="showButton">show me when text area true</p>
    </div>
    <div class="v-if-v-else">
      <h1>V-IF and V-ELSE</h1>
      <p>They must be siblings</p>
      <br />
      <h3>Do you like me?</h3>
      <input v-model="like" value="yes" id="yes" type="radio" />
      <label for="yes">Yes</label>
      <br />
      <!-- understand the value of option vith value attribute -->
      <input v-model="like" value="no" id="no" type="radio" />
      <label for="no">No</label>
      <br />
      <p v-if="like === `yes`">thank u😊!!!!</p>
      <p v-else-if="like === `no`">Whyy😔!!!!</p>
    </div>
    <div class="v-bind">
      <h1>V-BIND</h1>
      <p>
        One of the most useful directives so there's a shortcut! We can use it
        for so many things- class and style binding, creating dynamic props,
        etc...
      </p>
      <br />
      <h3>Change Color if textarea active</h3>
      <textarea v-model="changeColor"></textarea>
      <br />
      <p>
        if v-model true, pick a colored class which is defined in app.vue.
        Otherwise its empty
      </p>
      <p>Its also work like conditional rendering</p>
      <br />
      <button :class="[changeColor ? colored : '']">COLOR</button>
    </div>
    <div class="v-for">
      <h1>V-FOR</h1>
      <p>Print the numbers</p>
      <ul>
        <li v-for="num in 5" :key="num">-{{ num }}</li>
      </ul>

      <p>Print the object elements</p>
      <!--  <p v-for="(value, key, index) in jokes" :key="value"> 
    {{ index }}. {{ key }}: {{ value }}
  </p>-->

      <!--   jokes: {
        question: 'What did one baby prototype say to the other?',
        answer: `I'll race you to class!`,
        response: 'groan'
      } -->
    </div>
    <div class="v-on">
      <h1>V-ON</h1>
      <p>
        Extremely useful so there's a shortcut! v-on is great for binding to
        events like click and mouseenter. You're able to pass in a parameter for
        the event like (e) We can also use ternaries directly
      </p>
      <br />
      <button class="inc" @click="counter -= 1">-</button>
      <span class="quant-text">Quantity: {{ counter }}</span>
      <button class="inc" @click="counter += 1">+</button>
      <p>
        @mousemove.stop is comparable to e.stopPropagation() @mousemove.prevent
        this is like e.preventDefault() @submit.prevent this will no longer
        reload the page on submission @click.once not to be confused with
        v-once, this click event will be triggered once. @click.native so that
        you can listen to native events in the DOM
      </p>
      <!-- 
      <div v-on="
  mousedown: doThis, 
  mouseup: doThat
">
</div> -->
      <!-- <div @="
  mousedown: doThis,
  mouseup: doThat
">
</div> -->
    </div>
    <div class="v-html">
      <h1>V-HTML</h1>
      <p>Great for strings that have html elements that need to be rendered!</p>
      <h3>What is your favorite color?</h3>
  <p v-html="myColor"></p>
    </div>
    <div class="v-text">
      <h1>V-TEXT</h1>
     <h3>Write here some text..!</h3>
  <p v-text="write"></p>
  <p>{{ write }}</p>
  <p>it's recommended to use mustache templates instead</p>
  <p><input v-model="write" /></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DirectivesModifiersDataRendering",
  props: {
    writeMessage: String,
    checkedNames: String,
    showButton: String,
    like: String,
    changeColor: String,
    colored: String,
    counter: Number,
    myColor:String,
    write :String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin-top: 10px;
}
button {
  border: none;
  background: orangered;
  color: white;
  padding: 0.5em 1em;
  border-radius: 3px;
}
.changeBG {
  background: aqua;
}

.DirectivesModifiersDataRendering {
  border: 5px solid aqua;
  padding: 10px;
}
.v-model,
.v-if-v-show,
.v-bind,
.v-if-v-else,
.v-for,
.v-on,
.v-html,
.v-text {
  border: 4px solid pink;
}

textarea {
  padding: 10px;
}
.show-message {
  font-size: 2rem;
  color: red;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  text-decoration: underline;
  display: inline;
}
li {
  list-style: none;
}
</style>
