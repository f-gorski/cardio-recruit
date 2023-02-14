<template>
  <PageContainer>
    <PageTitle title="Private Token" />
    <PageContent>
      <AddTokenForm />
    </PageContent>
  </PageContainer>
</template>

<script>
import PageContainer from "../components/layout/PageContainer.vue"
import PageContent from "../components/layout/PageContent.vue"
import PageTitle from "../components/layout/PageTitle.vue"
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
