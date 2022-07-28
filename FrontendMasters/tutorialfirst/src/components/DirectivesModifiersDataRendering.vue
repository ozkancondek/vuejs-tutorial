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
      <input v-model="like" value="no" id="no" type="radio" />
      <label for="no">No</label>
      <br />
      <p v-if="like === `yes`">thank u😊!!!!</p>
      <p v-else-if="like === `no`">Whyy😔!!!!</p>
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
.DirectivesModifiersDataRendering {
  border: 5px solid aqua;
  padding: 10px;
}
.v-model,
.v-if-v-show {
  border: 4px solid pink;
}
.v-if-v-else {
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
</style>
