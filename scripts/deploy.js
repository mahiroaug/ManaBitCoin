main()

async function main () {
  try {
    const ManaBitCoin = await ethers.getContractFactory("ManaBitCoin")
    const manaBitCoin = await ManaBitCoin.deploy()

    console.info(`Token address: ${manaBitCoin.address}`)
  } catch (err) {
    console.error(err)
  }
}