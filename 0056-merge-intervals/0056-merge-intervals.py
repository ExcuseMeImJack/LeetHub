class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()
        stack = [intervals[0]]
        for i in range(1, len(intervals)):
            currInt = {
                'start': intervals[i][0],
                'end': intervals[i][1]
            };

            lastInt = {
                'start': stack[-1][0],
                'end': stack[-1][1]
            };

            if currInt['start'] <= lastInt['end'] and currInt['end'] > lastInt['end']:
                stack[-1][1] = currInt['end'];
            elif(currInt['start'] > lastInt['end']):
                stack.append(intervals[i]);
            
        return stack