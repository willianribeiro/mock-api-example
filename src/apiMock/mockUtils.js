export default {
  mockAjax
}

function mockAjax(response) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 2000 + 1000

    window.setTimeout(
      () => resolve({ data: response }),
      delay
    )
  })
}