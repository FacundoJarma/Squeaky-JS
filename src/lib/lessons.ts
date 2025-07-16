import { supabase } from "./supabase/client";

async function getUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) throw error;
  return data;
}

export async function getCompletedLessons() {
  try {
    const user = await getUser();
    const { data, error } = await supabase
      .from("user_completed_lessons")
      .select("*")
      .eq("user_id", user.user.id);
    if (error) throw error;

    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

async function isLessonAlreadyCompleted(lessonSlug: string) {
  try {
    const user = await getUser();
    const { data, error } = await supabase
      .from("user_completed_lessons")
      .select("*")
      .eq("user_id", user.user.id)
      .eq("lesson_slug", lessonSlug);
    if (error) throw error;
    return data.length > 0;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function completeLesson(lessonSlug: string) {
  try {
    const user = await getUser();

    if (await isLessonAlreadyCompleted(lessonSlug)) {
      return [];
    }

    const { data, error } = await supabase
      .from("user_completed_lessons")
      .insert([
        {
          user_id: user.user.id,
          lesson_slug: lessonSlug,
        },
      ]);
    if (error) throw error;
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function addToFavorites(lessonSlug: string) {
  try {
    const user = await getUser();
    const { data, error } = await supabase
      .from("user_favorite_lessons")
      .insert([
        {
          user_id: user.user.id,
          lesson_slug: lessonSlug,
        },
      ]);
    if (error) throw error;
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function removeFromFavorites(lessonSlug: string) {
  try {
    const user = await getUser();
    const { data, error } = await supabase
      .from("user_favorite_lessons")
      .delete()
      .eq("user_id", user.user.id)
      .eq("lesson_slug", lessonSlug);
    if (error) throw error;
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function getFavorites() {
  try {
    const user = await getUser();
    const { data, error } = await supabase
      .from("user_favorite_lessons")
      .select("lesson_slug")
      .eq("user_id", user.user.id);
    if (error) throw error;
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
}
