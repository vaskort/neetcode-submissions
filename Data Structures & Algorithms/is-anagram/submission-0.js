class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const sortedFirst = [...s].sort().join("");
        const sortedSecond = [...t].sort().join("");
        
        return sortedFirst === sortedSecond;
    }
}
