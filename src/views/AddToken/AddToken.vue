<template>
  <PageContainer>
    <PageTitle title="Private Token" />
    <PageContent>
      <AddTokenForm />
    </PageContent>
  </PageContainer>
</template>

<script>
import { PageContainer, PageContent, PageTitle } from "../../components/layout"
import AddTokenForm from "./AddTokenForm.vue"

export default {
  components: {
    PageContainer,
    PageContent,
    PageTitle,
    AddTokenForm,
  },
}
</script>

<style></style>
