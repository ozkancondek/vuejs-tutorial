<template>
  <div class="container">
    <h1>{{ header }}</h1>
    <div class="methods">
      <h1 :style="{ color: 'red' }">Methods</h1>
      <p>
        Are bound to the Vue instance, they are incredibly useful for functions
        you would like to access in directives
      </p>

      <div id="app">
        <div
          @mousemove="xCoordinate"
          :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
          class="box"
        >
          <p>
            <button @click="increment">+</button>
            {{ counter }}
            <button @click="decrement">-</button>
          </p>
          <p>Pixels across: {{ x }}</p>
        </div>
      </div>
      <div class="addComment">
        <h2>Add Comment Segment</h2>
        <ul>
          <li v-for="comment in comments" :key="comment">
            {{ comment }}
          </li>
        </ul>
        <br />
        <input
          @keyup.enter="addComment"
          v-model="newComment"
          placeholder="Add a comment"
        />
        <!-- I will reach to input value with v-model -->
        <br />
        <button @click="addComment">Add</button>
      </div>
      <div class="methodForm">
        <h2>Methods in Forms</h2>
        <form @submit.prevent="submitForm" ref="myForm">
          <!-- e.preventDefault() -->
          <div>
            <label for="name">Name:</label><br />
            <input id="name" type="text" v-model="name" required />
          </div>
          <div>
            <label for="email">Email:</label><br />
            <input id="email" type="email" v-model="email" required />
          </div>
          <div>
            <label for="caps">HOW DO I TURN OFF CAPS LOCK:</label><br />
            <textarea id="caps" v-model="caps" required></textarea>
          </div>
          <button :class="[name ? 'btnactive' : '']" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div class="sortwithvfor">
        <h2>Sorting data with v-for</h2>

        <h3>
          Sort titles by:
          <button @click="sortLowest">Lowest Rated</button>
          <button @click="sortHighest">Highest Rated</button>
        </h3>
        <table>
          <thead>
            <tr>
              <th v-for="key in columns" :key="key">
                {{ key }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in ratingsInfo" :key="entry">
              <td v-for="key in columns" :key="key">
                {{ entry[key] }}
              </td>
            </tr>
          </tbody>

          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MethodsPropertiesWatchers",
  props: {
    header: {
      type: String,
      default: () => "Methods, Component Properties and Watchers",
    },
  },
  data() {
    return {
      counter: 0,
      x: 0,
      newComment: "",
      comments: [
        "Looks great Julianne!",
        "I love the sea",
        "Where are you at?",
      ],
      name: "",
      email: "",
      caps: "",
      columns: ["title", "rating"],
      ratingsInfo: [
        { title: `White Chicks`, rating: 82 },
        { title: `Grey's Anatomy`, rating: 98 },
        { title: `Prison Break`, rating: 98 },
        { title: `How I Met Your Mother`, rating: 94 },
        { title: `Supernatural`, rating: 95 },
        { title: `Breaking Bad`, rating: 97 },
        { title: `The Vampire Diaries`, rating: 91 },
        { title: `The Walking Dead`, rating: 98 },
        { title: `Pretty Little Liars`, rating: 96 },
        { title: `Once Upon a Time`, rating: 98 },
        { title: `Sherlock`, rating: 95 },
        { title: `Death Note`, rating: 77 },
        { title: `Naruto`, rating: 88 },
        { title: `Arrow`, rating: 96 },
        { title: `Black Mirror`, rating: 80 },
        { title: `The Originals`, rating: 74 },
        { title: `The 100`, rating: 97 },
        { title: `Masha and the Bear`, rating: 81 },
        { title: `Hunter X Hunter`, rating: 57 },
        { title: `Marvel's Luke Cage`, rating: 95 },
        { title: `Marvel's Iron Fist`, rating: 98 },
      ],
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    //this refers the data in data object
    decrement() {
      this.counter--;
    },
    xCoordinate(e) {
      this.x = e.clientX;
    },
    //where is my mouse

    addComment() {
      this.comments.push(this.newComment);
      this.newComment = "";
    },
    submitForm() {
      console.log({
        name: this.name,
        email: this.email,
        caps: this.caps,
      });
      //   this.name = "";
      //   this.email = "";
      //   this.caps = "";
      this.$refs.myForm.reset();
    },
    sortLowest() {
      this.ratingsInfo.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    },
    sortHighest() {
      this.ratingsInfo.sort((a, b) => (a.rating > b.rating ? -1 : 1));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container,
.addComment,
.methodForm,
.sortwithvfor {
  border: 2px solid rgb(46, 115, 0);
  margin-top: 10px;
}
.methods {
  border: 2px solid aqua;
  margin-top: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
#app {
  margin: auto;
  width: 20vw;
  height: 20vh;
  padding: 15vmin;
  font-size: 30px;
  transition: 0.2s background-color ease;
}
.box {
  width: 100%;
  height: 100%;
}
input {
  width: 20rem;
  height: 3rem;
}
.btnactive {
  background-color: red;
}
table {
  background: #444;
  color: white;
  margin: auto;
  margin-top: 10px;
}

th {
  background: #333;
  text-transform: capitalize;
  text-align: left;
}

td,
th {
  padding: 10px;
  border-bottom: 1px solid #888;
}

td:first-child {
  width: 300px;
  border-right: 1px solid #888;
}
</style>
