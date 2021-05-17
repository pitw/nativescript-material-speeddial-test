<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton visibility="hidden" />
      <GridLayout columns="50, *">
        <Label class="action-bar-title" text="Home" colSpan="2" />

        <Label class="fas" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
      </GridLayout>
    </ActionBar>

    <GridLayout class="page__content">

    </GridLayout>      <MDSpeedDial
        buttonFontSize="26"
        text="mdi-one-up"
        buttonClass="mdi"
        buttonBackgroundColor="yellow"
        @tap="onTap"
      >
        <MDSpeedDialItem
          icon="res://ic_action_add"
          title="test1"
          backgroundColor="red"
          @tap="onTap"
        />
        <MDSpeedDialItem
          text="mdi-card-account-mail"
          title="test2"
          buttonClass="mdi"
          backgroundColor="green"
          @tap="onTap"
        />
        <MDSpeedDialItem
          backgroundImage="~/images/iu.jpg"
          backgroundColor="blue"
          @tap="onTap"
        />
        <MDSpeedDialItem
          icon="res://ic_action_add"
          title="test4"
          backgroundColor="orange"
          @tap="onTap"
        />
      </MDSpeedDial>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Home");
  },
  computed: {
    message() {
      return "<!-- Page content goes here -->";
    }
  },
  methods: {
    onTap() {
      console.log("test")
    },
    onDrawerButtonTap() {
      utils.showDrawer();
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
</style>
