import { FlatList, View, StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { ImageCard } from "./ImageCard";
import { Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { DownloadPicture } from "./BottomSheet";

export function SplitView({ wallpapers }: { wallpapers: Wallpaper[] }) {
  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(
    null
  );

  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.innerContainer}>
          <FlatList
            data={wallpapers.filter((_, index) => index % 2 === 0)}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <ImageCard
                  onPress={() => {
                    setSelectedWallpaper(item);
                  }}
                  wallpaper={item}
                />
              </View>
            )}
            keyExtractor={(item) => item.name}
          />
        </ThemedView>
        <ThemedView style={styles.innerContainer}>
          <FlatList
            data={wallpapers.filter((_, index) => index % 2 === 1)}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <ImageCard
                  onPress={() => {
                    setSelectedWallpaper(item);
                  }}
                  wallpaper={item}
                />
              </View>
            )}
            keyExtractor={(item) => item.name}
          />
        </ThemedView>
      </ThemedView>
      {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose={()=>setSelectedWallpaper(null)}/>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  innerContainer: {
    flex: 1,
    padding: 4,
  },

  imageContainer: {
    paddingVertical: 10,
  },
});
