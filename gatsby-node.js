exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type googleSheetEventsRow implements Node @dontInfer {
      id: ID!
      parent: Node
      children: [Node!]!
      internal: Internal!
      timestamp: String
      whatisthename: String
      when: String
      linktotheevent: String
      where: String
    }
  `
  createTypes(typeDefs)
}
