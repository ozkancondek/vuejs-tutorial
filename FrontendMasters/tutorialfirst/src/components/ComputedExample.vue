<template>
  <div class="border">
    <h1>{{ header }}</h1>
    <div class="contain">
      <h2>Blog Posts</h2>

      <div class="new">
        <h3>Add a New Post</h3>
        <form @submit.prevent="addPost" ref="myForm">
          <input v-model="newTitle" placeholder="title" required />
          <input v-model="newAuthor" placeholder="author name" required />
          <select v-model="newLabel" required>
            <option disabled value="">Add a New label</option>
            <option
              v-for="category in categories"
              :value="category"
              :key="category"
            >
              {{ category }}
            </option>
          </select>
          <button type="submit">Add New Blog Post</button>
        </form>
      </div>

      <select v-model="selected">
        <option disabled value="">Filter with a label</option>
        <option
          v-for="(category, index) in categories"
          :value="category"
          :key="index"
        >
          {{ category }}
        </option>
      </select>

      <div v-for="post in filteredByLabel" :key="post.title" class="post">
        <span class="label">{{ post.label }}</span>
        <p>{{ post.title }}</p>
        <small>{{ post.author }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComputedExample",
  props: {
    header: {
      type: String,
      default: () => "Computed Example",
    },
  },
  data() {
    return {
      selected: "",
      categories: ["science", "math", "poetry", "history"],
      posts: [
        {
          author: "@vFitzgerald",
          title: "Quod Ducimus Omnis",
          label: "science",
        },
        {
          author: "@mPalmer",
          title: "Vero Eius Laboriosam Ex Repudiandae",
          label: "math",
        },
        {
          author: "@mDean",
          title: "Magnam Odit",
          label: "science",
        },
        {
          author: "@tCole",
          title: "Velit Mollitia Voluptates Assumenda",
          label: "science",
        },
        {
          author: "@jCooper",
          title: "Eum Commodi Cupiditate",
          label: "poetry",
        },
        {
          author: "@lLamb",
          title: "Amet",
          label: "history",
        },
        {
          author: "@fMartin",
          title: "Voluptatem Fuga Cum Asperiores Error",
          label: "science",
        },
        {
          author: "@eHayes",
          title: "Ipsa Consectetur Rerum Repellat Quia",
          label: "math",
        },
        {
          author: "@cCollier",
          title: "Dolor Nihil Delectus",
          label: "science",
        },
        {
          author: "@cBenson",
          title: "Labore Ipsum Ad Pariatur",
          label: "poetry",
        },
      ],
      newTitle: "",
      newAuthor: "",
      newLabel: "",
    };
  },
  methods: {
    addPost() {
      let addedPost = {
        author: this.newAuthor,
        title: this.newTitle,
        label: this.newLabel,
      };
      this.posts.push(addedPost);
      this.newTitle = "";
      this.newAuthor = "";
      this.newLabel = "";
    },
  },
  computed: {
    filteredByLabel() {
      let filter = new RegExp(this.selected, "i");
      return this.posts.filter((el) => el.label.match(filter));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border {
  border: 2px solid blue;
}
h2 {
  text-transform: uppercase;
  letter-spacing: 0.02em;
  text-align: center;
  font-size: 30px;
}

li {
  list-style: none;
}
li span {
  display: inline-block;
  width: 100px;
}

.contain {
  width: 400px;
  padding: 10px 40px;
}

input,
select {
  font-family: "Work Sans", sans-serif;
}

button {
  color: white;
  border: none;
  border-radius: 3px;
  font-family: "Work Sans", sans-serif;
  font-weight: 300;
  font-size: 13px;
  width: 97.5%;
  text-align: center;
  padding: 10px 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: 0.25s all ease;
  background: #555;
  margin-bottom: 15px;
}
button:hover {
  transform: translateY(1px);
}

select {
  width: 100%;
}

.post,
.new {
  background: #eee;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 10px 20px;
  margin: 5px 0 10px;
}

.post,
.new p {
  font-weight: bold;
  margin: 10px 0 5px;
}

.new {
  background: #111;
  margin-bottom: 40px;
}

.new label {
  font-size: 13px;
}
.new input {
  margin: 0 0 10px;
}
.new select {
  width: 98%;
  margin-bottom: 10px;
}
.new h3 {
  text-align: center;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.05em;
  margin: 10px 0;
  color: white;
}

.label {
  border: 1px solid #ccc;
  background: white;
  color: black;
  float: right;
  margin: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 13px;
}
</style>
