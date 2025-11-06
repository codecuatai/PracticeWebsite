import cv2

path = r'd:\Laptrinh\Practice\Website\HTML\image\meomeo.png'

img = cv2.imread(path)

cv2.imshow("Tải ảnh", img)
cv2.waitKey(10000)