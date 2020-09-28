<template>
  <v-app class="grey lighten-4">
    <div id="skill">
      <v-container>
        <h2 class="text-center display-3 mb-5">My Skill</h2>
        <h3 class="mb-5">Programming Language</h3>
        <v-row>
          <v-col sm="4" md="3" lg="3" v-for="lang in languages" :key="lang.id">
            <skill
              :language="lang.language"
              :star="lang.star"
              :img="lang.img"
            />
          </v-col>
        </v-row>
        <h3 class="mb-5">Front End</h3>
        <v-row>
          <v-col
            sm="4"
            md="3"
            lg="3"
            v-for="skill in frontendSkills"
            :key="skill.id"
          >
            <skill
              :language="skill.language"
              :star="skill.star"
              :img="skill.img"
            />
          </v-col>
        </v-row>
        <h3 class="mb-5">Back End</h3>
        <v-row>
          <v-col
            sm="4"
            md="3"
            lg="3"
            v-for="skill in backendSkills"
            :key="skill.id"
          >
            <skill
              :language="skill.language"
              :star="skill.star"
              :img="skill.img"
            />
          </v-col>
        </v-row>
        <h3 class="mb-5">Infrastructure</h3>
        <v-row justify="start">
          <v-col
            sm="4"
            md="3"
            lg="3"
            v-for="skill in infraSkills"
            :key="skill.id"
          >
            <skill
              :language="skill.language"
              :star="skill.star"
              :img="skill.img"
            />
          </v-col>
        </v-row>
        <h3 class="mb-5">Database</h3>
        <v-row>
          <v-col
            sm="4"
            md="3"
            lg="3"
            v-for="skill in databaseSkills"
            :key="skill.id"
          >
            <skill
              :language="skill.language"
              :star="skill.star"
              :img="skill.img"
            />
          </v-col>
        </v-row>
        <h3 class="mb-5">Other</h3>
        <v-row>
          <v-col
            sm="4"
            md="3"
            lg="3"
            v-for="skill in otherSkills"
            :key="skill.id"
          >
            <skill
              :language="skill.language"
              :star="skill.star"
              :img="skill.img"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import Skill from "../Skill";
export default {
  name: "Skills",
  components: {
    Skill
  },
  props: {
    href: String
  },
  data() {
    return {
      languages: [
        {
          id: 1,
          language: "Java",
          star: 4,
          img: require("@/assets/skill/java.svg")
        },
        {
          id: 2,
          language: "JavaScript",
          star: 3.5,
          img: require("@/assets/skill/javascript.svg")
        },
        {
          id: 4,
          language: "PHP",
          star: 2.5,
          img: require("@/assets/skill/php.svg")
        }
      ],
      frontendSkills: [
        {
          id: 1,
          language: "HTML",
          star: 3.5,
          img: require("@/assets/skill/html5.svg")
        },
        {
          id: 2,
          language: "CSS",
          star: 3.5,
          img: require("@/assets/skill/css3.svg")
        },
        {
          id: 3,
          language: "Vue",
          star: 3,
          img: require("@/assets/skill/vue.svg")
        },
        {
          id: 4,
          language: "Bootstrap",
          star: 3,
          img: require("@/assets/skill/bootstrap.svg")
        },
        {
          id: 5,
          language: "Vuetify",
          star: 3,
          img: require("@/assets/skill/vuetify.svg")
        },
        {
          id: 7,
          language: "SASS",
          star: 2.5,
          img: require("@/assets/skill/sass.svg")
        }
      ],
      backendSkills: [
        {
          id: 1,
          language: "Spring",
          star: 3,
          img: require("../../assets/skill/spring.svg")
        },
        {
          id: 2,
          language: "Node",
          star: 3,
          img: require("../../assets/skill/nodejs.svg")
        },
        {
          id: 3,
          language: "Django",
          star: 3,
          img: require("../../assets/skill/django.svg")
        },
        {
          id: 4,
          language: "Nuxt",
          star: 3,
          img: require("@/assets/skill/nuxt.svg")
        }
      ],
      infraSkills: [
        {
          id: 1,
          language: "AWS",
          star: 3,
          img: require("../../assets/skill/aws.svg")
        },
        {
          id: 2,
          language: "Docker",
          star: 3,
          img: require("../../assets/skill/docker.svg")
        }
      ],
      databaseSkills: [
        {
          id: 1,
          language: "SQL Server",
          star: 3,
          img: require("../../assets/skill/microsoft-sql.svg")
        },
        {
          id: 2,
          language: "MySQL",
          star: 3,
          img: require("../../assets/skill/mysql.svg")
        }
      ],
      otherSkills: [
        {
          id: 1,
          language: "XD",
          star: 2,
          img: require("../../assets/skill/adobe-xd.svg")
        },
        {
          id: 2,
          language: "VScode",
          star: 2,
          img: require("../../assets/skill/vscode.svg")
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss"></style>
