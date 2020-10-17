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
                :counter="20"
                label="性"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="20"
                label="名"
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
                label="お問い合わせ内容"
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
import { load } from "recaptcha-v3";

export default {
  name: "ContactForm",
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "お名前は必須入力です。",
      v => (v && v.length <= 20) || "20文字以内でご記入お願いいたします。"
    ],
    loading: false,
    email: "",
    emailRules: [
      v => !!v || "メールアドレスは必須入力です。",
      v => /.+@.+/.test(v) || "メールアドレスの形式に誤りがあります。"
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
        // mail send
        this.loading = true;
        const mailer = functions.httpsCallable("sendMail");
        const contactForm = {
          name: `${this.lastname} ${this.firstname}`,
          email: this.email,
          contents: this.contents
        };

        mailer(contactForm)
          .then(() => {
            this.sendRecaptcha3();

            this.formReset();
            this.showSnackBar(
              "success",
              "お問い合わせいただきありがとうございます。返信までしばらくお待ちください。"
            );
          })
          .catch(() => {
            this.showSnackBar(
              "error",
              "エラーが発生いたしました。申し訳ございませんが、時間をおいて再度お問い合わせください。"
            );
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    sendRecaptcha3: async function() {
      // recaptcha v3
      // サイトキーをロードする
      const recaptcha = await load("6LdvVNgZAAAAAN7u0Fh3Fq6fJIe2RQyJHzmRB7NZ");
      const token = await recaptcha.execute("homepage");
      const func = functions.httpsCallable("callRecaptcha3");
      const response = await func({ token: token }).then(async response => {
        return response.data;
      });

      if (response.success === false) {
        throw new Error(`Recaptcha error: ${response["error-codes"]}`);
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
