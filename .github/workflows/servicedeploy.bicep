

resource webApp 'Microsoft.Web/staticSites@2022-09-01' = {
  name: 'axusapp'
  location: 'eastus2'
  sku: {
    name: 'Free'
  }
  properties: {
    repositoryUrl: 'https://github.com/MatthiasTheys/arxus'
    branch: 'master'
  }
}
