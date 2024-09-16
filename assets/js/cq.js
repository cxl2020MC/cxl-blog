async function cxl_cart_loader() {
    const params_url = document.location.search
    const params_data = new URLSearchParams(params_url)
    const pid = params_data.get("pid")
    console.log(`pid: ${pid}`)

    const response = await fetch("https://chuqiyun.com/cart/all")
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    const result = await response.json()
    console.log(result)
    const data = result.data
    const products_lists = data.products
    console.log(products_lists)

    const div = document.querySelector(".btn-custom-group")
    let div_html = ""
    // products_lists.forEach((products_list) => {
    for (const products_list of products_lists) {
        const find_result = products_list.products.find((item) => { return item.id == pid })
        console.log(find_result)
        if (find_result) {
            products_list.products.forEach((item) => {
                console.log(item);
                if (item.id == pid) {
                    div_html += `<label class="btn btn-custom active">
				                <input type="radio" checked="">${item.name}</input>
                            </label>`
                } else {
                    params_data.set("pid", item.id)
                    const item_url_str = `?${params_data.toString()}`
                    div_html += `<label class="btn btn-custom" onclick="window.location.href='${item_url_str}'">
				                <input type="radio">${item.name}</input>
                            </label>`
                }
            })
            div.innerHTML = div_html
            break
        }
    } //)
}



document.addEventListener("DOMContentLoaded", cxl_cart_loader)
