<template>
  <div id="app">
    <v-app id="inspire" class="pt-10 px-6">
      <v-container>
        <h2 class="text-center display-3 mb-5">Contact</h2>
        <p class="mb-10 text-center">
          お仕事の依頼・相談はこちらのフォームからお願いいたします。
          2日以内で返信致します。
        </p>
      </v-container>
      <v-form ref="form" v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-textarea
                v-model="contents"
                auto-grow
                label="Say Hi"
              ></v-textarea>
            </v-col>
            <v-col class="text-center" cols="12">
              <div class="my-2">
                <v-btn
                  @click="sendMail()"
                  :loading="loading"
                  text
                  color="info"
                  class="font-weight-bold"
                  >Submit</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-snackbar
        v-model="snackBar.show"
        :color="snackBar.color"
        bottom
        right
        :timeout="6000"
        class="font-weight-bold"
        >{{ snackBar.message }}</v-snackbar
      >
    </v-app>
  </div>
</template>

<script>
import { functions } from "@/plugins/firebase";
export default {
  name: "ContactForm",
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    loading: false,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    contents: "",
    snackBar: {
      show: false,
      color: "",
      message: ""
    }
  }),
  methods: {
    sendMail: function() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const mailer = functions.httpsCallable("sendMail");
        const contactForm = {
          name: `${this.firstname} ${this.lastname}`,
          email: this.email,
          contents: this.contents
        };

        mailer(contactForm)
          .then(() => {
            this.formReset();
            this.showSnackBar("success", "Thank you for your comment!");
          })
          .catch(() => {
            this.showSnackBar("error", "Sorry, something wrong... can't send");
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    showSnackBar: function(color, message) {
      this.snackBar.message = message;
      this.snackBar.color = color;
      this.snackBar.show = true;
    },
    formReset: function() {
      this.$refs.form.reset();
    }
  }
};
</script>
