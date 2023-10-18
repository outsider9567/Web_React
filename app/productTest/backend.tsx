import { collection, getDocs, getFirestore} from "firebase/firestore";
import app from "@/app/_firebase/Config"
import { useEffect, useState } from "react";

function useProducts() {
  console.log("in backend...:",app);
  const db = getFirestore(app);
  console.log("in backend2:",app);

  const [products, setProducts] = useState<{ desc: string, price: number }[]>([]);

  useEffect(() => {
    async function fetchData() {
      let data: { desc: string, price: number }[] = [];
      console.log("here");
      
      const querySnapshot = await getDocs(collection(db, "product"));
      querySnapshot.forEach((doc) => {
        data.push({ desc: doc.data().desc, price: doc.data().price })
        console.log(`${doc.id} => ${doc.data()}`);
      });
      setProducts(() => [...data]);
    }
    fetchData();
  }, [db]);
  return [products, setProducts] as const;
}
export default useProducts;