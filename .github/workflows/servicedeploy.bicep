param appName string = 'arxusapp'
param location string = 'eastus2'



resource webApp 'Microsoft.Web/staticSites@2022-09-01' = {
  name: appName
  location: location
  sku: {
    name: 'Free'
  }
}
