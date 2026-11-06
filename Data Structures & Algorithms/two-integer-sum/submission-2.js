class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const cache = {};
        let p = 0;
        let l = nums.length - 1;

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i]; // 5, 1

            if (cache[nums[i]] !== undefined) {
                return [cache[nums[i]], i];
            } else {
                cache[complement] = i;  // {5:  0, 1: 1}
            }

        }
    }
}
