export default {
  mockAjax
}

function mockAjax(response) {
  return new Promise((resolve, reject) => {
    console.log('pending...')

    window.setTimeout(
      () => resolve({ data: response }),
      Math.random() * 2000 + 1000
    )
  })
}