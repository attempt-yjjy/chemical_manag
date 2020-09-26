export default function (post_data) {
    let data = new URLSearchParams();
    for (let item in post_data) {
        data.append(item, post_data[item]);
    }
    return data;
}