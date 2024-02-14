const app = Vue.createApp({
  data() {
    // harus return object
    // data yang bersifat tidak statis atau konstan juga bisa disimpan di tmepat lain contohnya computed
    return {
      showNames: true,
      title1: "The Final empire",
      title2: "The HOly king",
      currentTitle: "title1",
      skor: 0,
      names: ["Alice", "Bob", "Charlie", "David", "Eve"],
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle() {
      this.currentTitle = this.currentTitle === "title1" ? "title2" : "title1";
      console.log(this.currentTitle);
    },
    increase() {
      this.skor = this.skor + 1;
    },
    decrease() {
      this.skor = this.skor - 1;
    },
    toggleShowNames() {
      this.showNames = !this.showNames;
    },
    handleMouseOver() {
      console.log("Mouse over event occurred");
    },
    handleMouseLeave() {
      console.log("Mouse leave event occurred");
    },
    handleDoubleClick() {
      console.log("Double click event occurred");
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
  mounted() {
    console.log(this.currentTitle);
  },

  // template: `
  //   <div>
  //     <h1>Contoh Template</h1>
  //     <h2>Contoh buku {{ this[this.currentTitle] }}</h2>
  //     <button @click="changeTitle">Ganti Judul</button>
  //   </div>
  // `,
});

app.mount("#contoh");
