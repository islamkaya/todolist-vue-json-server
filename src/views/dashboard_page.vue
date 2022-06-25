<template>
  <div class="row mx-auto">
    <div class="col-xs-10 col-sm-6 col-lg-4 col_centered">
      <div class="card" style="height: 500px; overflow-y: auto">
        <div class="card-body">
          <div class="h4 sticky-top">todolist.</div>
          <div class="input-group mx-auto">
            <input
              v-model="input_todo"
              @keydown.enter="add_todo"
              type="text"
              class="form-control mb-3"
              placeholder="add something."
            />

            <button
              type="button"
              @click="add_todo"
              class="btn btn_size btn-primary"
            >
              Add
            </button>
          </div>
          <ul class="list-group text-center">
            
            <li
              class="list-group-item  d-flex justify-content-between align-items-center"
              v-for="todo in todo_list"
              :key="todo.id"
            >
            <div>
            <label class="form-check-label  ms-2" for=""> {{ todo.text }}</label>
            
             </div>
              <button id="line" type="button" class="btn-close" aria-label="Close"></button>
            </li>
            
            
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      todo_list: [],
      input_todo: "",
    };
  },

  async created() {
    let userToken = localStorage.getItem("Token");
    if (userToken == null) {
      this.$router.push("/login");
    }
    try {
      var response = await axios.get("http://localhost:3000/todos");
      this.todo_list = response.data;
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async add_todo() {
      var response = await axios.post("http://localhost:3000/todos", {
        text: this.input_todo,
        completed: false,
      });
      this.todo_list = [...this.todo_list, response.data];
      this.input_todo = "";
    }
  },
};
</script>

<style>
.btn_size {
  height: 10%;
}
.col_centered {
  float: none;
  margin-right: auto;
  margin-left: auto;
}
.card {
  margin-top: 40%;
}
</style>
