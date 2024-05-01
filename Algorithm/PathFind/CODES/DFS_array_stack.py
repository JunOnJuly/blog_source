# visited listay + stack
def DFS_listay_stack(map_list, N, M):
	# 이동 가이드, 4 방향
	move_guide = [[] for _ in range(4)]
	move_guide[0] = [ 0, 1 ]
	move_guide[1] = [ 1, 0 ]
	move_guide[2] = [ 0, -1 ]
	move_guide[3] = [ -1, 0 ]
	# 모든 이동경로 기록
	routes = []
	# 스택
	stk = [[0, 0]]
	# 방문 목록
	visited = [[True for _ in range(10)] for __ in range(10)]
	# 스택이 빌 때 까지 탐색
	while not stk:
		# 현재 인덱스
		now_x = stk[-1][0]
		now_y = stk[-1][1]
		# 방문 기록
		visited[now_x][now_y] = False
		# 이동경로 기록
		routes.append([ now_x, now_y ])
		# 이동 가이드를 따라 네방향 탐색
		for i in range(4):
			# 다음 후보 인덱스
			next_x = now_x + move_guide[i][0]
			next_y = now_y + move_guide[i][1]
			## 후보 인덱스가 조건에 부합하면
			# 인덱스 범위안에 존재하는지
			# 방문한적 없는 인덱스인지
			# 벽이 아닌지
			if (next_x >= 0 and next_x < N) and \
            	(next_y >= 0 and next_y < M) and \
				(visited[next_x][next_y]) and \
				(map_list[next_x][next_y] == 0):
				# 스택에 삽입
				stk.append([ next_x, next_y ])
				# 바로 다음 인덱스 탐색
				break

			# 조건에 부합하는 후보 인덱스가 존재하지 않으면
			elif i == 3:
				# 스택에서 팝
				stk.pop()

	return routes


# 격자의 크기, 행 / 열
N = 10
M = 10
# 맵 생성, 0 : 길 / 1 : 벽
map_list = [[] for _ in range(10)]
map_list[9] = [ 1, 0, 1, 1, 0, 0, 0, 1, 0, 0 ]
map_list[8] = [ 0, 0, 1, 1, 0, 1, 0, 0, 0, 1 ]
map_list[7] = [ 1, 0, 0, 1, 0, 1, 1, 0, 1, 1 ]
map_list[6] = [ 0, 0, 0, 1, 1, 0, 0, 0, 1, 0 ]
map_list[5] = [ 1, 1, 0, 1, 0, 1, 1, 0, 1, 0 ]
map_list[4] = [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 0 ]
map_list[3] = [ 1, 1, 0, 0, 0, 0, 0, 1, 1, 0 ]
map_list[2] = [ 1, 1, 0, 1, 0, 1, 0, 0, 1, 1 ]
map_list[1] = [ 1, 0, 0, 1, 0, 0, 1, 0, 1, 0 ]
map_list[0] = [ 0, 0, 1, 0, 0, 1, 1, 1, 1, 0 ]

print(DFS_listay_stack(map_list, N, M))