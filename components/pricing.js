import PostSubTitle from '../components/post-sub-title'

export default function Pricing({ products }) {
  return (
    <section className="text-gray-700 body-font relative">
      <div className="flex flex-col text-center w-full mb-10">
      <PostSubTitle>Unsere Produkte</PostSubTitle>

        <p className="lg:w-2/3 mx-auto leading-relaxed text-xl px-4 sm:px-0">
          Bei mehreren Produkten reduzieren sich natürlich die Versandkosten.
          Möchten Sie was bestellen? Dann schreiben Sie uns!
        </p>
      </div>
      <div className="lg:w-2/3 w-full mx-auto overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap mb-10">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-green-400 rounded-tl rounded-bl">
                Produkt
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-green-400">
                Einzelpreis
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-green-400">
                Versandkosten
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-green-400">
                Gesamtpreis
              </th>
              <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-green-400 rounded-tr rounded-br"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.name}>
                <td className="px-4 py-3">{product.name}</td>
                <td className="px-4 py-3">{product.einzelpreis} €</td>
                <td className="px-4 py-3">{product.versandkosten} €</td>
                <td className="px-4 py-3">{product.gesamtpreis} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
