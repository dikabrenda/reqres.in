import prettier from 'prettier'

const consol = (res) => {
      console.log("\n" + prettier.format(JSON.stringify(res.data) + "\n", {
            semi: false,
            parser: "json-stringify"
      }));
      console.log(res.headers.date + "\n")
}

export default consol