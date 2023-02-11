<template>
  <PageContainer>
    <PageTitle title="Signals" />
    <PageContent>
      <Table>
        <HeaderRow>
          <HeaderCell title="Name" />
          <HeaderCell title="Created At" />
          <HeaderCell title="Status" />
        </HeaderRow>

        <Row v-for="signal in signals" :key="signal.id">
          <NameCell :name="signal.name" :isNew="signal.new" />
          <DateCell :date="signal.created_at" />
          <StatusCell :status="signal.status" />
          <!-- <RecencyCell :isRecent="signal.new" /> -->
          <LinkCell :to="signal.id" />
        </Row>
      </Table>
    </PageContent>
  </PageContainer>
</template>

<script>
import cardioAPI from "../api/cardioAPI"
import { mapGetters } from "vuex"

import mockSignals from "../mockSignals.js"

import PageContainer from "../components/layout/PageContainer.vue"
import PageTitle from "../components/layout/PageTitle.vue"
import PageContent from "../components/layout/PageContent.vue"
import Table from "../components/table/Table.vue"
import HeaderRow from "../components/table/rows/HeaderRow.vue"
import Row from "../components/table/rows/Row.vue"

import HeaderCell from "../components/table/cells/HeaderCell.vue"
import DateCell from "../components/table/cells/DateCell.vue"
import LinkCell from "../components/table/cells/LinkCell.vue"
import StatusCell from "../components/table/cells/StatusCell.vue"
import TextCell from "../components/table/cells/TextCell.vue"
import NameCell from "../components/table/cells/NameCell.vue"
// import RecencyCell from "../components/table/cells/RecencyCell.vue"

export default {
  components: {
    PageContainer,
    PageTitle,
    PageContent,
    Table,
    HeaderRow,
    Row,
    HeaderCell,
    DateCell,
    LinkCell,
    StatusCell,
    TextCell,
    NameCell,
    // RecencyCell,
  },
  data() {
    return {
      signals: [],
    }
  },
  computed: {
    ...mapGetters(["token"]),
  },
  async mounted() {
    console.log(this.token)
    const linkHeader =
      "<https://app.cardiomatics.com/api/v2/signals?page=2&per_page=1&private_token=8c8d960848cb272a655b68f9baa7d19b4b418060>; rel='next', <https://app.cardiomatics.com/api/v2/signals?page=1&per_page=1&private_token=8c8d960848cb272a655b68f9baa7d19b4b418060>; rel='first', <https://app.cardiomatics.com/api/v2/signals?page=3&per_page=1&private_token=8c8d960848cb272a655b68f9baa7d19b4b418060>; rel='last'"
    const links = linkHeader.split(",")
    const [nextLink, rel] = links
      .filter((link) => {
        return link.split(";")[1] === " rel='next'"
      })[0]
      .split(";")

    console.log("nextLinkn", nextLink)

    // this.signals = await cardioAPI.get("/signals", { per_page: 1 })
    this.signals = mockSignals
  },
}
</script>

<style></style>
