/**
 * Created by Liu.Jun on 2020/11/11 22:24.
 */

export function openNewPage(url) {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.target = '_blank';
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
